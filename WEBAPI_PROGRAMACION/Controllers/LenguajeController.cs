using AutoMapper;
using Microsoft.AspNetCore.Components.Routing;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using WEBAPI_PROGRAMACION.DTO;
using WEBAPI_PROGRAMACION.Models;

namespace WEBAPI_PROGRAMACION.Controllers
{
    [ApiController]
    [Route("Api/Programacion/Lenguajes")]
    public class LenguajeController : Controller
    {
        private readonly DataContext db;
        private readonly IMapper mp;

        public LenguajeController(DataContext db, IMapper mp)
        {
            this.db = db;
            this.mp = mp;
        }

        [HttpPost]
        [Route("Save")]
        public async Task<ActionResult> Guardar(LenguajeDTO dto)
        {
            var response = mp.Map<Lenguaje>(dto);
            db.Add(response);
            await db.SaveChangesAsync();
            return Ok();
        }

        [HttpGet]
        [Route("ListarLenguajes")]
        public async Task<ActionResult> Listar()
        {
            var response = await db.Lenguajes.ToListAsync();
            return Ok(response);
        }

        // https://localhost:7033/Api/Programacion/Lenguajes/

        [HttpGet("{id:int}")]
        public async Task<ActionResult> ViewLenguaje(int id)
        {
            var response = await db.Lenguajes.FindAsync(id);
            return Ok(response);
        }

        // https://localhost:7033/Api/Programacion/Lenguajes/Save

        [HttpGet]
        [Route("ListarLenguajesParametros")]
        public async Task<ActionResult> ListarSelect()
        {
            var response = await db.Lenguajes.Select(s => new { s.LenguajeName }).ToListAsync();
            return Ok(response);
        }


        [HttpPut("{id:int}/Update")]
        public async Task<ActionResult> Actualizar(int id, LenguajeDTO dto)
        {
            var response = mp.Map<Lenguaje>(dto);
            response.LenguajeId = id;
            db.Update(response);
            await db.SaveChangesAsync();
            return Ok(await db.Lenguajes.ToListAsync());
        }

        [HttpDelete("{id:int}/delete")]
        public async Task<ActionResult> Eliminar(int id)
        {
            var response = await db.Lenguajes.Where(l => l.LenguajeId == id).ExecuteDeleteAsync();
            if (response == 0)
            {
                return NotFound();
            }

            return NoContent();
        }
    }
}

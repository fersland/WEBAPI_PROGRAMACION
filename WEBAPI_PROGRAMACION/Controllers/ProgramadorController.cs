using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WEBAPI_PROGRAMACION.DTO;
using WEBAPI_PROGRAMACION.Models;

namespace WEBAPI_PROGRAMACION.Controllers
{
    [ApiController]
    [Route("Api/Programacion/Programador")]
    public class ProgramadorController : Controller
    {
        private readonly DataContext db;
        private readonly IMapper mp;

        public ProgramadorController(DataContext db, IMapper mp)
        {
            this.db = db;
            this.mp = mp;
        }

        // https://localhost:7033/Api/Programacion/Programador/ListarProgramadores
        [HttpGet]
        [Route("ListarProgramadores")]
        public async Task<ActionResult> Listar()
        {
            var response = await db.Programadores.ToListAsync();
            return Ok(response);
        }

        
        [HttpPost]
        [Route("Guardar")]
        public async Task<ActionResult> Guardar(ProgramadorDTO dto)
        {
            var response = mp.Map<Programador>(dto);
            db.Add(response);
            await db.SaveChangesAsync();
            return Ok(response);
        }

        [HttpPut("{id:int}/Update")]
        public async Task<ActionResult> Update(int id, ProgramadorDTO dto)
        {
            var response = mp.Map<Programador>(dto);
            response.ProgramadorId = id;
            db.Update(response);
            await db.SaveChangesAsync();
            return Ok(await db.Programadores.ToListAsync());
        }

        [HttpDelete("{id:int}/Delete")]
        public async Task<ActionResult> Delete(int id)
        {
            var response = await db.Programadores.Where(p => p.ProgramadorId == id).ExecuteDeleteAsync();

            if (response == 0)
            {
                return NotFound();
            }
            return NoContent();
        }
    }
}
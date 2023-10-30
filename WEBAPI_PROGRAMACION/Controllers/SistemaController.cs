using Microsoft.AspNetCore.Mvc;
using AutoMapper;
using WEBAPI_PROGRAMACION.DTO;
using WEBAPI_PROGRAMACION.Models;
using Microsoft.EntityFrameworkCore;

namespace WEBAPI_PROGRAMACION.Controllers
{
    [ApiController]
    [Route("api/sistema")]
    public class SistemaController : Controller
    {
        private readonly DataContext _dataContext;
        private readonly IMapper _mapper;
        public SistemaController(DataContext dataContext, IMapper _mapper)
        {
            this._dataContext = dataContext;
            this._mapper = _mapper;
        }

        [HttpPost]
        public async Task<ActionResult> Post(SistemaDTO dto)
        {
            var sistema = _mapper.Map<Sistema>(dto);
            if(sistema.Lenguajes is not null)
            {
                foreach(var leng in sistema.Lenguajes)
                {
                    _dataContext.Entry(leng).State = EntityState.Unchanged;
                }
            }

            _dataContext.Add(sistema);
            await _dataContext.SaveChangesAsync();
            return Ok();
        }
    }
}

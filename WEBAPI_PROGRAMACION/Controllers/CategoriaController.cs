using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace WEBAPI_PROGRAMACION.Controllers
{
    [ApiController]
    [Route("Api/Categorias")]
    public class CategoriaController : Controller
    {
        private readonly DataContext _dataContext;
        public CategoriaController(DataContext dataContext)
        {
            this._dataContext = dataContext;     
        }

        [HttpGet]
        public async Task<IActionResult> Listar()
        {
            return Ok(await _dataContext.Categories.ToListAsync());
        }
    }
}

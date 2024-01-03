using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace WEBAPI_PROGRAMACION.Controllers
{
    [ApiController]
    [Route("api/product")]
    public class ProductController : Controller
    {
        private readonly DataContext _dataContext;
        public ProductController(DataContext dataContext)
        {
            this._dataContext = dataContext;   
        }

        [HttpGet]
        [Route("ListarProductos")]
        public async Task<ActionResult> Listar()
        {
            var response = await _dataContext.Products.ToListAsync();
            return Ok(response);
        }
    }
}

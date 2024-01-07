using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WEBAPI_PROGRAMACION.DTO;
using WEBAPI_PROGRAMACION.Models;

namespace WEBAPI_PROGRAMACION.Controllers
{
    [ApiController]
    [Route("api/product")]
    public class ProductController : Controller
    {
        private readonly DataContext _dataContext;
        private readonly IMapper _autoMapper;

        public ProductController(DataContext dataContext, IMapper autoMapper)
        {
            this._dataContext = dataContext;
            this._autoMapper = autoMapper;
        }

        [HttpGet]
        [Route("ListarProductos")]
        public async Task<ActionResult> Listar()
        {
            var response = await _dataContext.Products.ToListAsync();
            return Ok(response);
        }

        // https://localhost:7033/api/product
        [HttpPost]
        [Route("AgregarProducto")]
        public async Task<ActionResult> Agregar(ProductDTO dto)
        {
            var entidad = _autoMapper.Map<Product>(dto);
            _dataContext.Add(entidad);
            await _dataContext.SaveChangesAsync();
            return Ok();
        }

        [HttpGet("selectProduct/{id:int}")]
        public async Task<ActionResult> SelectProduct(int id)
        {
            var response = await _dataContext.Products.Where(x => x.Id == id).ToListAsync();
            return Ok(response);
        }

        [HttpGet("selectCategory/{id:int}")]
        public async Task<ActionResult> SelectProductCategory(int id)
        {
            var response = await _dataContext.Products.Where(x => x.CategoryId == id).ToListAsync();
            return Ok(response);
        }

    }
}

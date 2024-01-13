using WEBAPI_PROGRAMACION.Models;

namespace WEBAPI_PROGRAMACION.DTO
{
    public class ProductDTO
    {
        public string Name { get; set; }
        public decimal price { get; set; }
        public int stock { get; set; }
        public string ImgProduct { get; set; }
        public string Color { get; set; }
       // public bool IsAvailable { get; set; }

        public int CategoryId { get; set; }
    }
}

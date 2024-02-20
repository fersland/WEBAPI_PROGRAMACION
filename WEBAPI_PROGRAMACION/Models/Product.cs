using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Microsoft.IdentityModel.Protocols.OpenIdConnect;

namespace WEBAPI_PROGRAMACION.Models
{
    public class Product
    {
        public int Id { get; set; }        
        public string Name { get; set; } = string.Empty;
        public decimal price { get; set; }
        public int stock { get; set; }
        public string ImgProduct { get; set; } = string.Empty;
        public string Color { get; set; } = string.Empty;
        public int Reviews { get; set; }
        public bool IsAvailable { get; set; }

        public int CategoryId { get; set; }
        public Category Category { get; set; } = null!;

    }
}

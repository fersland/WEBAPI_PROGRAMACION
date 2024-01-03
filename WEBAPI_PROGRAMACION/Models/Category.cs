using System.ComponentModel.DataAnnotations;

namespace WEBAPI_PROGRAMACION.Models
{
    public class Category
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "Este campo es requerido")]
        [MaxLength(120)]
        public string Name { get; set; } = string.Empty;

        public ICollection<Product> Products { get; set; }
    }
}

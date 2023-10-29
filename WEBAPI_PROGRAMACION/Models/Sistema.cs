namespace WEBAPI_PROGRAMACION.Models
{
    public class Sistema
    {
        public int SistemaId { get; set; }
        public string SistemaName { get; set; } = string.Empty;

        public List<SistemaProgramador> SP { get; set; } = new List<SistemaProgramador>();
        public HashSet<Lenguaje> Lenguajes { get; set; } = new HashSet<Lenguaje>();
    }
}

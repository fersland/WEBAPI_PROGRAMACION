namespace WEBAPI_PROGRAMACION.Models
{
    public class Lenguaje
    {
        public int LenguajeId { get; set; }
        public string LenguajeName { get; set; } = string.Empty;


        public HashSet<Sistema> Sistemas { get; set; } = new HashSet<Sistema>();
    }
}

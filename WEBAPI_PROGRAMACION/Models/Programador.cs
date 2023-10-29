namespace WEBAPI_PROGRAMACION.Models
{
    public class Programador
    {
        public int ProgramadorId { get; set; }
        public string ProgramadorName { get; set; } = string.Empty;

        // LISTA
        public List<SistemaProgramador> SP { get; set; } = new List<SistemaProgramador>();

    }
}

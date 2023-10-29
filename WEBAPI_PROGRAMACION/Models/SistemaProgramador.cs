namespace WEBAPI_PROGRAMACION.Models
{
    public class SistemaProgramador
    {
        public int SistemaId { get; set; }
        public int ProgramadorId { get; set; }

        public Sistema Sistema { get; set; } = null!;
        public Programador Programador { get; set; } = null!;

        public string Desarrollador { get; set; } = null!;
    }
}

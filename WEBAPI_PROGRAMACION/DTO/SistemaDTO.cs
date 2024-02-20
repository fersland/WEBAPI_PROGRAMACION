namespace WEBAPI_PROGRAMACION.DTO
{
    public class SistemaDTO
    {
        public string SistemaName { get; set; } = string.Empty;

        public List<int> Lenguajes { get; set; } = new List<int>();

        public List<SistemaProgramadorDTO> SP { get; set; } = new List<SistemaProgramadorDTO>();

    }
}

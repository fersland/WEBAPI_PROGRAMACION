using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System.Linq.Expressions;

namespace WEBAPI_PROGRAMACION.Models.Config
{
    public class SistemaProgramadorConfig : IEntityTypeConfiguration<SistemaProgramador>
    {
        public void Configure(EntityTypeBuilder<SistemaProgramador> builder)
        {
            builder.HasKey(sp => new {sp.SistemaId, sp.ProgramadorId});
            builder.Property(sp => sp.Desarrollador).HasMaxLength(100);
        }
    }
}
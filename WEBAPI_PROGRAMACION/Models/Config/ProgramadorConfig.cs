using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace WEBAPI_PROGRAMACION.Models.Config
{
    public class ProgramadorConfig : IEntityTypeConfiguration<Programador>
    {
        public void Configure(EntityTypeBuilder<Programador> builder)
        {
            builder.HasKey(
                                p => p.ProgramadorId
                            );
            builder.Property(
                                p => p.ProgramadorId
                            ).IsRequired();
            builder.Property(
                                p => p.ProgramadorName
                            ).HasMaxLength(100);
        }
    }
}

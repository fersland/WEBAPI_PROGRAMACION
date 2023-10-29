using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace WEBAPI_PROGRAMACION.Models.Config
{
    public class LenguajeConfig : IEntityTypeConfiguration<Lenguaje>
    {
        void IEntityTypeConfiguration<Lenguaje>.Configure(EntityTypeBuilder<Lenguaje> builder)
        {
            builder.HasKey(l => l.LenguajeId);
            builder.Property(l => l.LenguajeName).IsRequired();
            builder.Property(l => l.LenguajeName).HasMaxLength(100);
        }
    }
}

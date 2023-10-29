using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace WEBAPI_PROGRAMACION.Models.Config
{
    public class SistemaConfig : IEntityTypeConfiguration<Sistema>
    {
        public void Configure(EntityTypeBuilder<Sistema> builder)
        {
            builder.HasKey(s => s.SistemaId);
            builder.Property(s => s.SistemaId).IsRequired();
            builder.Property(s => s.SistemaName).IsRequired();
            builder.Property(s => s.SistemaName).HasMaxLength(100);

        }
    }
}

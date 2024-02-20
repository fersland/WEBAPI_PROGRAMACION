using Microsoft.EntityFrameworkCore;
using System.Reflection;
using WEBAPI_PROGRAMACION.Models;

namespace WEBAPI_PROGRAMACION
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options) { }

        public DbSet<Lenguaje> Lenguajes => Set<Lenguaje>();
        public DbSet<Sistema> Sistemas => Set<Sistema>();
        public DbSet<Programador> Programadores => Set<Programador>();
        public DbSet<SistemaProgramador> SP => Set<SistemaProgramador>();
        public DbSet<Product> Products => Set<Product>();
        public DbSet<Category> Categories => Set<Category>();
        public DbSet<Estado> Estados => Set<Estado>();


        protected override void OnModelCreating(ModelBuilder model)
        {
            base.OnModelCreating(model);

            model.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());

            model.Entity<Product>()
                .HasOne(p => p.Category)
                .WithMany(c => c.Products)
                .HasForeignKey(p => p.CategoryId);
            model.Entity<Product>().HasKey(p => p.Id);
            model.Entity<Product>().Property(p => p.Name).HasMaxLength(120).IsRequired();
            model.Entity<Product>().Property(p => p.price).HasPrecision(18, 2).IsRequired();
            model.Entity<Product>().Property(p => p.stock).IsRequired();
            model.Entity<Product>().Property(p => p.ImgProduct).HasMaxLength(250);
            model.Entity<Product>().Property(p => p.Color).HasMaxLength(255);
            model.Entity<Product>().Property(p => p.IsAvailable).IsRequired();
            model.Entity<Product>().Property(p => p.CategoryId).IsRequired();

            //model.Entity<SistemaProgramador>().HasKey(sp => new {sp.SistemaId, sp.ProgramadorId});
            //model.Entity<SistemaProgramador>().Property(sp => sp.Desarrollador).HasMaxLength(100);

        }
    }
}

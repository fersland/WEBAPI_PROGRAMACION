﻿using Microsoft.EntityFrameworkCore;
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


        protected override void OnModelCreating(ModelBuilder model)
        {
            base.OnModelCreating(model);

            model.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());

            model.Entity<Product>()
                .HasOne(p => p.Category)
                .WithMany(c => c.Products)
                .HasForeignKey(p => p.CategoryId);

            //model.Entity<SistemaProgramador>().HasKey(sp => new {sp.SistemaId, sp.ProgramadorId});
            //model.Entity<SistemaProgramador>().Property(sp => sp.Desarrollador).HasMaxLength(100);

        }
    }
}

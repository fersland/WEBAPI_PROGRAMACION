﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using WEBAPI_PROGRAMACION;

#nullable disable

namespace WEBAPI_PROGRAMACION.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20231029162205_webapi_developers")]
    partial class webapi_developers
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.10")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("LenguajeSistema", b =>
                {
                    b.Property<int>("LenguajesLenguajeId")
                        .HasColumnType("int");

                    b.Property<int>("SistemasSistemaId")
                        .HasColumnType("int");

                    b.HasKey("LenguajesLenguajeId", "SistemasSistemaId");

                    b.HasIndex("SistemasSistemaId");

                    b.ToTable("LenguajeSistema");
                });

            modelBuilder.Entity("WEBAPI_PROGRAMACION.Models.Lenguaje", b =>
                {
                    b.Property<int>("LenguajeId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("LenguajeId"));

                    b.Property<string>("LenguajeName")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.HasKey("LenguajeId");

                    b.ToTable("Lenguajes");
                });

            modelBuilder.Entity("WEBAPI_PROGRAMACION.Models.Programador", b =>
                {
                    b.Property<int>("ProgramadorId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ProgramadorId"));

                    b.Property<string>("ProgramadorName")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.HasKey("ProgramadorId");

                    b.ToTable("Programadores");
                });

            modelBuilder.Entity("WEBAPI_PROGRAMACION.Models.Sistema", b =>
                {
                    b.Property<int>("SistemaId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("SistemaId"));

                    b.Property<string>("SistemaName")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.HasKey("SistemaId");

                    b.ToTable("Sistemas");
                });

            modelBuilder.Entity("WEBAPI_PROGRAMACION.Models.SistemaProgramador", b =>
                {
                    b.Property<int>("SistemaId")
                        .HasColumnType("int");

                    b.Property<int>("ProgramadorId")
                        .HasColumnType("int");

                    b.Property<string>("Desarrollador")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.HasKey("SistemaId", "ProgramadorId");

                    b.HasIndex("ProgramadorId");

                    b.ToTable("SP");
                });

            modelBuilder.Entity("LenguajeSistema", b =>
                {
                    b.HasOne("WEBAPI_PROGRAMACION.Models.Lenguaje", null)
                        .WithMany()
                        .HasForeignKey("LenguajesLenguajeId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("WEBAPI_PROGRAMACION.Models.Sistema", null)
                        .WithMany()
                        .HasForeignKey("SistemasSistemaId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("WEBAPI_PROGRAMACION.Models.SistemaProgramador", b =>
                {
                    b.HasOne("WEBAPI_PROGRAMACION.Models.Programador", "Programador")
                        .WithMany("SP")
                        .HasForeignKey("ProgramadorId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("WEBAPI_PROGRAMACION.Models.Sistema", "Sistema")
                        .WithMany("SP")
                        .HasForeignKey("SistemaId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Programador");

                    b.Navigation("Sistema");
                });

            modelBuilder.Entity("WEBAPI_PROGRAMACION.Models.Programador", b =>
                {
                    b.Navigation("SP");
                });

            modelBuilder.Entity("WEBAPI_PROGRAMACION.Models.Sistema", b =>
                {
                    b.Navigation("SP");
                });
#pragma warning restore 612, 618
        }
    }
}
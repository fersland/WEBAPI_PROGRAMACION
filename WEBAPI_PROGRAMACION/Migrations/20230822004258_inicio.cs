using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WEBAPI_PROGRAMACION.Migrations
{
    /// <inheritdoc />
    public partial class inicio : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Lenguajes",
                columns: table => new
                {
                    LenguajeId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    LenguajeName = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Lenguajes", x => x.LenguajeId);
                });

            migrationBuilder.CreateTable(
                name: "Programadores",
                columns: table => new
                {
                    ProgramadorId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ProgramadorName = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Programadores", x => x.ProgramadorId);
                });

            migrationBuilder.CreateTable(
                name: "Sistemas",
                columns: table => new
                {
                    SistemaId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    SistemaName = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Sistemas", x => x.SistemaId);
                });

            migrationBuilder.CreateTable(
                name: "LenguajeSistema",
                columns: table => new
                {
                    LenguajesLenguajeId = table.Column<int>(type: "int", nullable: false),
                    SistemasSistemaId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LenguajeSistema", x => new { x.LenguajesLenguajeId, x.SistemasSistemaId });
                    table.ForeignKey(
                        name: "FK_LenguajeSistema_Lenguajes_LenguajesLenguajeId",
                        column: x => x.LenguajesLenguajeId,
                        principalTable: "Lenguajes",
                        principalColumn: "LenguajeId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_LenguajeSistema_Sistemas_SistemasSistemaId",
                        column: x => x.SistemasSistemaId,
                        principalTable: "Sistemas",
                        principalColumn: "SistemaId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "SP",
                columns: table => new
                {
                    SistemaId = table.Column<int>(type: "int", nullable: false),
                    ProgramadorId = table.Column<int>(type: "int", nullable: false),
                    Desarrollador = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SP", x => new { x.SistemaId, x.ProgramadorId });
                    table.ForeignKey(
                        name: "FK_SP_Programadores_ProgramadorId",
                        column: x => x.ProgramadorId,
                        principalTable: "Programadores",
                        principalColumn: "ProgramadorId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_SP_Sistemas_SistemaId",
                        column: x => x.SistemaId,
                        principalTable: "Sistemas",
                        principalColumn: "SistemaId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_LenguajeSistema_SistemasSistemaId",
                table: "LenguajeSistema",
                column: "SistemasSistemaId");

            migrationBuilder.CreateIndex(
                name: "IX_SP_ProgramadorId",
                table: "SP",
                column: "ProgramadorId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "LenguajeSistema");

            migrationBuilder.DropTable(
                name: "SP");

            migrationBuilder.DropTable(
                name: "Lenguajes");

            migrationBuilder.DropTable(
                name: "Programadores");

            migrationBuilder.DropTable(
                name: "Sistemas");
        }
    }
}

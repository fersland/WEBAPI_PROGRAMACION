using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using WEBAPI_PROGRAMACION;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddDbContext<DataContext>(options => options.UseSqlServer("name=db"));
builder.Services.AddAutoMapper(typeof(Program));
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// AGREGADO CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("fersCors", app =>
    {
        app.AllowAnyOrigin()
        .AllowAnyHeader()
        .AllowAnyMethod();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("fersCors");
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();

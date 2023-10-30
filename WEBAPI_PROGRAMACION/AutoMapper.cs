using AutoMapper;
using WEBAPI_PROGRAMACION.DTO;
using WEBAPI_PROGRAMACION.Models;

namespace WEBAPI_PROGRAMACION
{
    public class AutoMapper : Profile
    {
        public AutoMapper()
        {
            CreateMap<LenguajeDTO, Lenguaje>();
            CreateMap<ProgramadorDTO, Programador>();

            CreateMap<SistemaDTO, Sistema>()
                .ForMember(ent => ent.Lenguajes, dto => dto
                .MapFrom(campo => campo.Lenguajes.Select(id => new Lenguaje { LenguajeId = id})));

            CreateMap<SistemaProgramadorDTO, SistemaProgramador>();
        }
    }
}

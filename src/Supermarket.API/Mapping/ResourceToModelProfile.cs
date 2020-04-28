using AutoMapper;
using Supermarket.API.Domain.Models;
using Supermarket.API.Domain.Models.Queries;
using Supermarket.API.Resources;
using Supermarket.API.Extensions;

namespace Supermarket.API.Mapping
{
    public class ResourceToModelProfile : Profile
    {
        public ResourceToModelProfile()
        {
            CreateMap<SaveCategoryResource, Category>();
        
            CreateMap<SaveProductResource, Product>()
                            .ForMember(src => src.UnitOfMeasurement, 
                            opt => opt.MapFrom(src => (EUnitOfMeasurement)src.UnitOfMeasurement));
        
            CreateMap<ProductQueryResource, ProductQuery>();

        }
    }
}
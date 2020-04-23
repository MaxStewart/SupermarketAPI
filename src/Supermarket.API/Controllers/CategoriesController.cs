using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using Supermarket.API.Domain.Services;
using Supermarket.API.Domain.Models;

namespace Supermarket.API.Controllers 
{
    [Route("/api/[controller]")]
    public class CategoriesController : Controller
    {
        private readonly ICategoryService _categoryService;

        public  CategoriesController(ICategoryService categoryService)
        {
            _categoryService = categoryService;
        }

        // /api/categories
        [HttpGet]
        public async Task<IEnumerable<Category>> GetAllAsync()
        {
            var categories = await _categoryService.ListAsync();
            return categories;
        }    
    }
}
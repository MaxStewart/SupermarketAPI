using System.ComponentModel.DataAnnotations;

namespace Supermarket.API.Resources 
{
    public class SaveProductResource
    {
        [Required]
        public string Name { get; set; }
        [Required]
        [Range(0, 100)]
        public int QuantityInPackage { get; set; }
        [Required]
        [Range(1, 5)]
        public int UnitOfMeasurement { get; set; } // Automapper will convert it to an enum
        [Required]
        public int CategoryId { get; set; }
    }
}
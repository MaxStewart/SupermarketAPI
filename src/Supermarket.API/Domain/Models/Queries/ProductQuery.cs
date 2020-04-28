namespace Supermarket.API.Domain.Models.Queries
{
    public class ProductQuery : Query
    {
        public int? CategoryId { get; set; }

        public ProductQuery(int? categoryId, int page, int itemsPerPage) : base(page, itemsPerPage)
        {
            CategoryId = categoryId;
        }
    }
}
using Microsoft.EntityFrameworkCore;
using Supermarket.API.Domain.Models;
using Microsoft.EntityFrameworkCore.InMemory.ValueGeneration.Internal;


namespace Supermarket.API.Persistance.Contexts
{
    public class AppDbContext : DbContext
    {
        public DbSet<Category> Categories { get; set; }
        public DbSet<Product> Products { get; set; }

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<Category>().ToTable("Categories");
            builder.Entity<Category>().HasKey(p => p.Id);
            builder.Entity<Category>().Property(p => p.Id).IsRequired().ValueGeneratedOnAdd();//.HasValueGenerator<InMemoryIntegerValueGenerator<int>>();
            builder.Entity<Category>().Property(p => p.Name).IsRequired().HasMaxLength(30);
            builder.Entity<Category>().HasMany(p => p.Products).WithOne(p => p.Category).HasForeignKey(p => p.CategoryId);

            builder.Entity<Category>().HasData
            (
                new Category { Id = 100, Name = "Fruits and Vegetables" }, // Id set manually due to in-memory provider
                new Category { Id = 101, Name = "Dairy" },
                new Category { Id = 102, Name = "Confectionery" },
                new Category { Id = 103, Name = "Meat" },
                new Category { Id = 104, Name = "Condiments" }
            );

            builder.Entity<Product>().ToTable("Products");
            builder.Entity<Product>().HasKey(p => p.Id);
            builder.Entity<Product>().Property(p => p.Id).IsRequired().ValueGeneratedOnAdd();
            builder.Entity<Product>().Property(p => p.Name).IsRequired().HasMaxLength(50);
            builder.Entity<Product>().Property(p => p.Price).IsRequired();
            builder.Entity<Product>().Property(p => p.Description).IsRequired();
            builder.Entity<Product>().Property(p => p.QuantityInPackage).IsRequired();
            builder.Entity<Product>().Property(p => p.UnitOfMeasurement).IsRequired();

            builder.Entity<Product>().HasData
            (
                new Product
                {
                    Id = 100,
                    Name = "Apple",
                    Price = 1.99,
                    Description = "Remember your 5+ a day",
                    QuantityInPackage = 1,
                    UnitOfMeasurement = EUnitOfMeasurement.Unity,
                    CategoryId = 100
                },
                new Product
                {
                    Id = 101,
                    Name = "Carrots",
                    Price = 3.99,
                    Description = "Eat enough and you might see in the dark",
                    QuantityInPackage = 2,
                    UnitOfMeasurement = EUnitOfMeasurement.Liter,
                    CategoryId = 100,
                },
                // Dairy Products
                new Product
                {
                    Id = 102,
                    Name = "Milk",
                    Price = 3.99,
                    Description = "A fine dairy product",
                    QuantityInPackage = 2,
                    UnitOfMeasurement = EUnitOfMeasurement.Liter,
                    CategoryId = 101,
                },
                new Product
                {
                    Id = 103,
                    Name = "Full Cream",
                    Price = 5.99,
                    Description = "Fresh full fat cream",
                    QuantityInPackage = 2,
                    UnitOfMeasurement = EUnitOfMeasurement.Liter,
                    CategoryId = 101,
                },
                new Product
                {
                    Id = 104,
                    Name = "Lite Cream",
                    Price = 5.99,
                    Description = "Fresh low fat cream",
                    QuantityInPackage = 2,
                    UnitOfMeasurement = EUnitOfMeasurement.Liter,
                    CategoryId = 101,
                },
                // Confectionary
                new Product
                {
                    Id = 105,
                    Name = "Licorice",
                    Price = 1.99,
                    Description = "Lovely and bitter black licorice",
                    QuantityInPackage = 2,
                    UnitOfMeasurement = EUnitOfMeasurement.Liter,
                    CategoryId = 102,
                },
                // Meat
                new Product
                {
                    Id = 106,
                    Name = "Venison",
                    Price = 14.99,
                    Description = "A great alternative to beef",
                    QuantityInPackage = 2,
                    UnitOfMeasurement = EUnitOfMeasurement.Liter,
                    CategoryId = 103,
                }
            );
        }

    }
}
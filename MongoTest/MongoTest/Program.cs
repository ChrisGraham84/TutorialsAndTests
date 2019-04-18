using MongoDB.Bson;
using MongoDB.Driver;
using System;
using System.Collections.Generic;

namespace MongoTest
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");

            var _client = new MongoClient("mongodb://localhost:27017");
            var database = _client.GetDatabase("demodatabase");
            var collection = database.GetCollection<Employee>("employee");

            var Chris = new Employee
            {
                Name = "Chris Graham",
                Profession = "Developer",
                Pets = new List<Pet> { new Pet { Name = "Pikachu", Type = "Pokemon" } }
            };

             //collection.InsertOne(Chris);
            var employees = collection.Find(x => x.Name == Chris.Name).ToList();
            //var list = collection.Find(new BsonDocument("Name", "Jack")).ToList();

            foreach (var emp in employees)
            {
                Console.WriteLine(emp.Pets[0].Name);
            }

        }
    }

    public class Employee
    {
        public BsonObjectId _id { get; set; }
        public string Name { get; set; }
        public string Profession { get; set; }
        public List<Pet> Pets { get; set; }
    }
    public class Pet
    {
        public string Name { get; set; }
        public string Type { get; set; }  
    }
}

namespace RequestHeaderParserMicroservice.Model{
    public class ParsedHeaderModel{
        public string? Ipaddress { get; set; }
        public string? Language {get; set; }

        public string? Software {get; set;}

        public ParsedHeaderModel(string? ipaddress,string? language,string? software){
            Ipaddress = ipaddress;
            Language = language;
            Software = software;
        }
    }
}
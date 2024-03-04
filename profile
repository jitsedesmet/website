PREFIX : <https://jitsedesmet.be/#>
PREFIX foaf: <http://xmlns.com/foaf/0.1/>
PREFIX schema: <http://schema.org/>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX ex: <https://example.org/>

:me a foaf:Person ;
#    My name (not counting this as one of the 5 properties)
    foaf:name "Jitse De Smet"^^xsd:string ;
#    I know two other studens, I link to them and indicate that I know them.
    foaf:knows <https://nielspraet.be/#me>,
                <https://victorronsyn.be/#me> ;
#    5 other properties
    foaf:givenName "Jitse"^^xsd:string ;
    foaf:familyName "De Smet"^^xsd:string ;
    foaf:birthday "2001-07-23"^^xsd:date ;
    foaf:weblog <https://thesis.jitsedesmet.be/> ;
    foaf:mbox "mailto:jitse.desmet@ugent.be"^^xsd:string ;
#   describe I am a participant in the Knowledge Graph 2023-2024 course
    ex:tackles [
        a schema:Course ;
        schema:name "Knowledge Graphs 2023-2024"@en ;
        schema:numberOfCredits "6"^^xsd:integer ;
        schema:courseCode "E018160"^^xsd:string ;
        schema:description "Managing data on one machine for one specific kind of use is fairly straightforward. It is from the moment that that initial dataset needs to be shared with more than one application and needs to be combined with other datasets managed by other organizations on different machines, that more complex computer science and information technology problems arise. In this course we will deep-dive in the current state of the art in creating Knowledge on Web-Scale. Your personal data, data published publicly on the Web and data explicitly shared with you, becomes your Knowledge Graph that applications and services can use to assist you in your day to day activities. Data scientists and engineers today claim 80% of their time goes to preparing and integrating the data: let us take you on a quest to fully automate data integration"^^xsd:string ;
        rdfs:seeAlso <https://studiekiezer.ugent.be/2024/studiefiche/en/E018160> ;
    ] .

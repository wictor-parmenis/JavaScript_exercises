import {FHIR} from "fhirclient"
FHIR.oauth2.ready()
    .then(client => client.request("Patient"))
    .then(console.log)
    .catch(console.error);
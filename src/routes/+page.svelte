<script lang="ts">
    import {serializeSchema} from "$lib/json-ld-helpers";

    const me = {
        "@id": "https://jitsedesmet.be/#me",
        "@type": [ "http://xmlns.com/foaf/0.1/Person"],
        "http://xmlns.com/foaf/0.1/birthday": [{
                "@type": "http://www.w3.org/2001/XMLSchema#date",
                "@value": "2001-07-23"
        }],
        "http://xmlns.com/foaf/0.1/familyName": [{
                "@value": "De Smet"
        }],
        "http://xmlns.com/foaf/0.1/givenName": [{
                "@value": "Jitse"
        }],
        "http://xmlns.com/foaf/0.1/mbox": [{
                "@value": "mailto:jitse.desmet@ugent.be"
        }],
        "http://xmlns.com/foaf/0.1/name": [{
                "@value": "Jitse De Smet"
        }],
        "http://xmlns.com/foaf/0.1/weblog": [{
                "@id": "https://thesis.jitsedesmet.be/"
        }]
    };

</script>

<svelte:head>
    <title>Jitse De Smet</title>
    <meta name="description" content="Personal Website of Jitse De Smet">
    <link rel="meta" href="#me"/>
    {@html serializeSchema(me)}
</svelte:head>

<h1>Personal website of Jitse De Smet</h1>

I sell apples! They are truly delicious!

<style>

</style>

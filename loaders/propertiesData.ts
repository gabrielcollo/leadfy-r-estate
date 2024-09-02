import type { RequestURLParam } from "apps/website/functions/requestToParam.ts";
import { xml2js } from "https://deno.land/x/xml2js@1.0.0/mod.ts";
// import { Parser } from "xml2js";


export type PropertiesList = string[];

export interface Props {
    numberOfProperties?: number;
  }

export default async function propertiesData(
    {numberOfProperties = 1}: Props,
    _req: Request,
): Promise<PropertiesList> {
    // const { Parser } = xml2js
    // const { slug, idloja } = props;

    const response = await fetch(
        `https://darkgreen-sparrow-978409.hostingersite.com/wp-load.php?security_key=71970be4e06301b8&export_id=1&action=get_data`,
    );

    const text = await response.text();

    const obj = xml2js(text, {
        compact: true,
    });

    
    // const parser = new Parser();
    // const json = await parser.parseStringPromise(text);
    const json = JSON.stringify(obj, null, 4)
    console.log(json);

    // const vehicles = json.rss.channel[0].item;

    // const pdpResult = {
    //     idLoja: idloja,
    //     storeDataFromApi: {
    //         title: json.rss.channel[0].title[0],
    //         description: json.rss.channel[0].description[0],
    //         logo: json.rss.channel[0].logo[0],
    //     },
    //     result: vehicles.filter((car: Vehicle) => {
    //         const titleCar = car["g:title"][0].toLowerCase().replaceAll(
    //             "-",
    //             " ",
    //         );
    //         const idCar = car["g:id"][0];
    //         const slugCleaned = decodeURIComponent(
    //             slug.replaceAll("-", " ").replaceAll("|", "/").toLowerCase(),
    //         );

    //         return slugCleaned.includes("oferta") &&
    //             slugCleaned.replaceAll("|", "/").includes(titleCar) &&
    //             slugCleaned.includes(idCar);
    //     }),
    // };

    return "" || [];
}

var wms_layers = [];


        var lyr_google_satellite_0 = new ol.layer.Tile({
            'title': 'google_satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_PST5xLHVerjngung_1 = new ol.format.GeoJSON();
var features_PST5xLHVerjngung_1 = format_PST5xLHVerjngung_1.readFeatures(json_PST5xLHVerjngung_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PST5xLHVerjngung_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PST5xLHVerjngung_1.addFeatures(features_PST5xLHVerjngung_1);
var lyr_PST5xLHVerjngung_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PST5xLHVerjngung_1, 
                style: style_PST5xLHVerjngung_1,
                popuplayertitle: "PST 5x LH Verjüngung",
                interactive: true,
                title: '<img src="styles/legend/PST5xLHVerjngung_1.png" /> PST 5x LH Verjüngung'
            });
var format_PST5xNHVerjngung_2 = new ol.format.GeoJSON();
var features_PST5xNHVerjngung_2 = format_PST5xNHVerjngung_2.readFeatures(json_PST5xNHVerjngung_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PST5xNHVerjngung_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PST5xNHVerjngung_2.addFeatures(features_PST5xNHVerjngung_2);
var lyr_PST5xNHVerjngung_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PST5xNHVerjngung_2, 
                style: style_PST5xNHVerjngung_2,
                popuplayertitle: "PST 5x NH Verjüngung",
                interactive: true,
                title: '<img src="styles/legend/PST5xNHVerjngung_2.png" /> PST 5x NH Verjüngung'
            });
var format_PST42LHkonventionell_3 = new ol.format.GeoJSON();
var features_PST42LHkonventionell_3 = format_PST42LHkonventionell_3.readFeatures(json_PST42LHkonventionell_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PST42LHkonventionell_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PST42LHkonventionell_3.addFeatures(features_PST42LHkonventionell_3);
var lyr_PST42LHkonventionell_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PST42LHkonventionell_3, 
                style: style_PST42LHkonventionell_3,
                popuplayertitle: "PST 42 LH konventionell",
                interactive: true,
                title: '<img src="styles/legend/PST42LHkonventionell_3.png" /> PST 42 LH konventionell'
            });
var format_PST42NHkonventionell_4 = new ol.format.GeoJSON();
var features_PST42NHkonventionell_4 = format_PST42NHkonventionell_4.readFeatures(json_PST42NHkonventionell_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PST42NHkonventionell_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PST42NHkonventionell_4.addFeatures(features_PST42NHkonventionell_4);
var lyr_PST42NHkonventionell_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PST42NHkonventionell_4, 
                style: style_PST42NHkonventionell_4,
                popuplayertitle: "PST 42 NH konventionell",
                interactive: true,
                title: '<img src="styles/legend/PST42NHkonventionell_4.png" /> PST 42 NH konventionell'
            });
var format_PST41LHZBaumReparatur_5 = new ol.format.GeoJSON();
var features_PST41LHZBaumReparatur_5 = format_PST41LHZBaumReparatur_5.readFeatures(json_PST41LHZBaumReparatur_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PST41LHZBaumReparatur_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PST41LHZBaumReparatur_5.addFeatures(features_PST41LHZBaumReparatur_5);
var lyr_PST41LHZBaumReparatur_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PST41LHZBaumReparatur_5, 
                style: style_PST41LHZBaumReparatur_5,
                popuplayertitle: "PST 41 LH Z-Baum Reparatur",
                interactive: true,
                title: '<img src="styles/legend/PST41LHZBaumReparatur_5.png" /> PST 41 LH Z-Baum Reparatur'
            });
var format_PST41NHZBaumReparatur_6 = new ol.format.GeoJSON();
var features_PST41NHZBaumReparatur_6 = format_PST41NHZBaumReparatur_6.readFeatures(json_PST41NHZBaumReparatur_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PST41NHZBaumReparatur_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PST41NHZBaumReparatur_6.addFeatures(features_PST41NHZBaumReparatur_6);
var lyr_PST41NHZBaumReparatur_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PST41NHZBaumReparatur_6, 
                style: style_PST41NHZBaumReparatur_6,
                popuplayertitle: "PST 41 NH Z-Baum Reparatur",
                interactive: true,
                title: '<img src="styles/legend/PST41NHZBaumReparatur_6.png" /> PST 41 NH Z-Baum Reparatur'
            });
var format_PST40LHZBaumOptimum_7 = new ol.format.GeoJSON();
var features_PST40LHZBaumOptimum_7 = format_PST40LHZBaumOptimum_7.readFeatures(json_PST40LHZBaumOptimum_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PST40LHZBaumOptimum_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PST40LHZBaumOptimum_7.addFeatures(features_PST40LHZBaumOptimum_7);
var lyr_PST40LHZBaumOptimum_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PST40LHZBaumOptimum_7, 
                style: style_PST40LHZBaumOptimum_7,
                popuplayertitle: "PST 40 LH Z-Baum Optimum",
                interactive: true,
                title: '<img src="styles/legend/PST40LHZBaumOptimum_7.png" /> PST 40 LH Z-Baum Optimum'
            });
var format_PST40LHvorZBaumOptimum_8 = new ol.format.GeoJSON();
var features_PST40LHvorZBaumOptimum_8 = format_PST40LHvorZBaumOptimum_8.readFeatures(json_PST40LHvorZBaumOptimum_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PST40LHvorZBaumOptimum_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PST40LHvorZBaumOptimum_8.addFeatures(features_PST40LHvorZBaumOptimum_8);
var lyr_PST40LHvorZBaumOptimum_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PST40LHvorZBaumOptimum_8, 
                style: style_PST40LHvorZBaumOptimum_8,
                popuplayertitle: "PST 40 LH vor Z-Baum Optimum",
                interactive: true,
                title: '<img src="styles/legend/PST40LHvorZBaumOptimum_8.png" /> PST 40 LH vor Z-Baum Optimum'
            });
var format_PST40NHZBaumOptimum_9 = new ol.format.GeoJSON();
var features_PST40NHZBaumOptimum_9 = format_PST40NHZBaumOptimum_9.readFeatures(json_PST40NHZBaumOptimum_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PST40NHZBaumOptimum_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PST40NHZBaumOptimum_9.addFeatures(features_PST40NHZBaumOptimum_9);
var lyr_PST40NHZBaumOptimum_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PST40NHZBaumOptimum_9, 
                style: style_PST40NHZBaumOptimum_9,
                popuplayertitle: "PST 40 NH Z-Baum Optimum",
                interactive: true,
                title: '<img src="styles/legend/PST40NHZBaumOptimum_9.png" /> PST 40 NH Z-Baum Optimum'
            });
var format_PST3xJungbestndenichtreparierbarausgewachsen_10 = new ol.format.GeoJSON();
var features_PST3xJungbestndenichtreparierbarausgewachsen_10 = format_PST3xJungbestndenichtreparierbarausgewachsen_10.readFeatures(json_PST3xJungbestndenichtreparierbarausgewachsen_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PST3xJungbestndenichtreparierbarausgewachsen_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PST3xJungbestndenichtreparierbarausgewachsen_10.addFeatures(features_PST3xJungbestndenichtreparierbarausgewachsen_10);
var lyr_PST3xJungbestndenichtreparierbarausgewachsen_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PST3xJungbestndenichtreparierbarausgewachsen_10, 
                style: style_PST3xJungbestndenichtreparierbarausgewachsen_10,
                popuplayertitle: "PST 3x Jungbestände nicht reparierbar (ausgewachsen)",
                interactive: true,
                title: '<img src="styles/legend/PST3xJungbestndenichtreparierbarausgewachsen_10.png" /> PST 3x Jungbestände nicht reparierbar (ausgewachsen)'
            });
var format_PST34JungbestndereparierbarbeiBedarf_11 = new ol.format.GeoJSON();
var features_PST34JungbestndereparierbarbeiBedarf_11 = format_PST34JungbestndereparierbarbeiBedarf_11.readFeatures(json_PST34JungbestndereparierbarbeiBedarf_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PST34JungbestndereparierbarbeiBedarf_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PST34JungbestndereparierbarbeiBedarf_11.addFeatures(features_PST34JungbestndereparierbarbeiBedarf_11);
var lyr_PST34JungbestndereparierbarbeiBedarf_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PST34JungbestndereparierbarbeiBedarf_11, 
                style: style_PST34JungbestndereparierbarbeiBedarf_11,
                popuplayertitle: "PST 3(4) Jungbestände reparierbar (bei Bedarf)",
                interactive: true,
                title: '<img src="styles/legend/PST34JungbestndereparierbarbeiBedarf_11.png" /> PST 3(4) Jungbestände reparierbar (bei Bedarf)'
            });
var format_PST2xBestandesbegrndung_12 = new ol.format.GeoJSON();
var features_PST2xBestandesbegrndung_12 = format_PST2xBestandesbegrndung_12.readFeatures(json_PST2xBestandesbegrndung_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PST2xBestandesbegrndung_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PST2xBestandesbegrndung_12.addFeatures(features_PST2xBestandesbegrndung_12);
var lyr_PST2xBestandesbegrndung_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PST2xBestandesbegrndung_12, 
                style: style_PST2xBestandesbegrndung_12,
                popuplayertitle: "PST 2x Bestandesbegründung",
                interactive: true,
                title: '<img src="styles/legend/PST2xBestandesbegrndung_12.png" /> PST 2x Bestandesbegründung'
            });
var format_PST1xKahlflchenScheinbestockung_13 = new ol.format.GeoJSON();
var features_PST1xKahlflchenScheinbestockung_13 = format_PST1xKahlflchenScheinbestockung_13.readFeatures(json_PST1xKahlflchenScheinbestockung_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PST1xKahlflchenScheinbestockung_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PST1xKahlflchenScheinbestockung_13.addFeatures(features_PST1xKahlflchenScheinbestockung_13);
var lyr_PST1xKahlflchenScheinbestockung_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PST1xKahlflchenScheinbestockung_13, 
                style: style_PST1xKahlflchenScheinbestockung_13,
                popuplayertitle: "PST 1x Kahlflächen, Scheinbestockung",
                interactive: true,
                title: '<img src="styles/legend/PST1xKahlflchenScheinbestockung_13.png" /> PST 1x Kahlflächen, Scheinbestockung'
            });

lyr_google_satellite_0.setVisible(true);lyr_PST5xLHVerjngung_1.setVisible(true);lyr_PST5xNHVerjngung_2.setVisible(true);lyr_PST42LHkonventionell_3.setVisible(true);lyr_PST42NHkonventionell_4.setVisible(true);lyr_PST41LHZBaumReparatur_5.setVisible(true);lyr_PST41NHZBaumReparatur_6.setVisible(true);lyr_PST40LHZBaumOptimum_7.setVisible(true);lyr_PST40LHvorZBaumOptimum_8.setVisible(true);lyr_PST40NHZBaumOptimum_9.setVisible(true);lyr_PST3xJungbestndenichtreparierbarausgewachsen_10.setVisible(true);lyr_PST34JungbestndereparierbarbeiBedarf_11.setVisible(true);lyr_PST2xBestandesbegrndung_12.setVisible(true);lyr_PST1xKahlflchenScheinbestockung_13.setVisible(true);
var layersList = [lyr_google_satellite_0,lyr_PST5xLHVerjngung_1,lyr_PST5xNHVerjngung_2,lyr_PST42LHkonventionell_3,lyr_PST42NHkonventionell_4,lyr_PST41LHZBaumReparatur_5,lyr_PST41NHZBaumReparatur_6,lyr_PST40LHZBaumOptimum_7,lyr_PST40LHvorZBaumOptimum_8,lyr_PST40NHZBaumOptimum_9,lyr_PST3xJungbestndenichtreparierbarausgewachsen_10,lyr_PST34JungbestndereparierbarbeiBedarf_11,lyr_PST2xBestandesbegrndung_12,lyr_PST1xKahlflchenScheinbestockung_13];
lyr_PST5xLHVerjngung_1.set('fieldAliases', {'hdom': 'hdom', 'NH': 'NH', });
lyr_PST5xNHVerjngung_2.set('fieldAliases', {'hdom': 'hdom', 'NH': 'NH', });
lyr_PST42LHkonventionell_3.set('fieldAliases', {'hdom': 'hdom', 'NH': 'NH', });
lyr_PST42NHkonventionell_4.set('fieldAliases', {'hdom': 'hdom', 'NH': 'NH', });
lyr_PST41LHZBaumReparatur_5.set('fieldAliases', {'hdom': 'hdom', 'NH': 'NH', });
lyr_PST41NHZBaumReparatur_6.set('fieldAliases', {'hdom': 'hdom', 'NH': 'NH', });
lyr_PST40LHZBaumOptimum_7.set('fieldAliases', {'hdom': 'hdom', 'NH': 'NH', });
lyr_PST40LHvorZBaumOptimum_8.set('fieldAliases', {'hdom': 'hdom', 'NH': 'NH', });
lyr_PST40NHZBaumOptimum_9.set('fieldAliases', {'hdom': 'hdom', 'NH': 'NH', });
lyr_PST3xJungbestndenichtreparierbarausgewachsen_10.set('fieldAliases', {'hdom': 'hdom', 'NH': 'NH', });
lyr_PST34JungbestndereparierbarbeiBedarf_11.set('fieldAliases', {'hdom': 'hdom', 'NH': 'NH', });
lyr_PST2xBestandesbegrndung_12.set('fieldAliases', {'hdom': 'hdom', 'NH': 'NH', });
lyr_PST1xKahlflchenScheinbestockung_13.set('fieldAliases', {'hdom': 'hdom', 'NH': 'NH', });
lyr_PST5xLHVerjngung_1.set('fieldImages', {'hdom': 'TextEdit', 'NH': 'TextEdit', });
lyr_PST5xNHVerjngung_2.set('fieldImages', {'hdom': 'TextEdit', 'NH': 'TextEdit', });
lyr_PST42LHkonventionell_3.set('fieldImages', {'hdom': 'TextEdit', 'NH': 'TextEdit', });
lyr_PST42NHkonventionell_4.set('fieldImages', {'hdom': 'TextEdit', 'NH': 'TextEdit', });
lyr_PST41LHZBaumReparatur_5.set('fieldImages', {'hdom': 'TextEdit', 'NH': 'TextEdit', });
lyr_PST41NHZBaumReparatur_6.set('fieldImages', {'hdom': 'TextEdit', 'NH': 'TextEdit', });
lyr_PST40LHZBaumOptimum_7.set('fieldImages', {'hdom': 'TextEdit', 'NH': 'TextEdit', });
lyr_PST40LHvorZBaumOptimum_8.set('fieldImages', {'hdom': 'TextEdit', 'NH': 'TextEdit', });
lyr_PST40NHZBaumOptimum_9.set('fieldImages', {'hdom': 'TextEdit', 'NH': 'TextEdit', });
lyr_PST3xJungbestndenichtreparierbarausgewachsen_10.set('fieldImages', {'hdom': 'TextEdit', 'NH': 'TextEdit', });
lyr_PST34JungbestndereparierbarbeiBedarf_11.set('fieldImages', {'hdom': 'TextEdit', 'NH': 'TextEdit', });
lyr_PST2xBestandesbegrndung_12.set('fieldImages', {'hdom': 'TextEdit', 'NH': 'TextEdit', });
lyr_PST1xKahlflchenScheinbestockung_13.set('fieldImages', {'hdom': 'TextEdit', 'NH': 'TextEdit', });
lyr_PST5xLHVerjngung_1.set('fieldLabels', {'hdom': 'inline label - always visible', 'NH': 'inline label - always visible', });
lyr_PST5xNHVerjngung_2.set('fieldLabels', {'hdom': 'inline label - always visible', 'NH': 'inline label - always visible', });
lyr_PST42LHkonventionell_3.set('fieldLabels', {'hdom': 'inline label - always visible', 'NH': 'inline label - always visible', });
lyr_PST42NHkonventionell_4.set('fieldLabels', {'hdom': 'inline label - always visible', 'NH': 'inline label - always visible', });
lyr_PST41LHZBaumReparatur_5.set('fieldLabels', {'hdom': 'inline label - always visible', 'NH': 'inline label - always visible', });
lyr_PST41NHZBaumReparatur_6.set('fieldLabels', {'hdom': 'inline label - always visible', 'NH': 'inline label - always visible', });
lyr_PST40LHZBaumOptimum_7.set('fieldLabels', {'hdom': 'inline label - always visible', 'NH': 'inline label - always visible', });
lyr_PST40LHvorZBaumOptimum_8.set('fieldLabels', {'hdom': 'inline label - always visible', 'NH': 'inline label - always visible', });
lyr_PST40NHZBaumOptimum_9.set('fieldLabels', {'hdom': 'inline label - always visible', 'NH': 'inline label - always visible', });
lyr_PST3xJungbestndenichtreparierbarausgewachsen_10.set('fieldLabels', {'hdom': 'inline label - always visible', 'NH': 'inline label - always visible', });
lyr_PST34JungbestndereparierbarbeiBedarf_11.set('fieldLabels', {'hdom': 'inline label - always visible', 'NH': 'inline label - always visible', });
lyr_PST2xBestandesbegrndung_12.set('fieldLabels', {'hdom': 'inline label - always visible', 'NH': 'inline label - always visible', });
lyr_PST1xKahlflchenScheinbestockung_13.set('fieldLabels', {'hdom': 'inline label - always visible', 'NH': 'inline label - always visible', });
lyr_PST1xKahlflchenScheinbestockung_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
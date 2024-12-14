var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_streams_2 = new ol.format.GeoJSON();
var features_streams_2 = format_streams_2.readFeatures(json_streams_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_streams_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_streams_2.addFeatures(features_streams_2);
var lyr_streams_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_streams_2, 
                style: style_streams_2,
                popuplayertitle: 'streams',
                interactive: true,
                title: '<img src="styles/legend/streams_2.png" /> streams'
            });
var format_waterbody_3 = new ol.format.GeoJSON();
var features_waterbody_3 = format_waterbody_3.readFeatures(json_waterbody_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_waterbody_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_waterbody_3.addFeatures(features_waterbody_3);
var lyr_waterbody_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_waterbody_3, 
                style: style_waterbody_3,
                popuplayertitle: 'waterbody',
                interactive: true,
                title: '<img src="styles/legend/waterbody_3.png" /> waterbody'
            });
var format_buildings_4 = new ol.format.GeoJSON();
var features_buildings_4 = format_buildings_4.readFeatures(json_buildings_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buildings_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buildings_4.addFeatures(features_buildings_4);
var lyr_buildings_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_buildings_4, 
                style: style_buildings_4,
                popuplayertitle: 'buildings',
                interactive: true,
                title: '<img src="styles/legend/buildings_4.png" /> buildings'
            });
var format_roads_5 = new ol.format.GeoJSON();
var features_roads_5 = format_roads_5.readFeatures(json_roads_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_roads_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_roads_5.addFeatures(features_roads_5);
var lyr_roads_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_roads_5, 
                style: style_roads_5,
                popuplayertitle: 'roads',
                interactive: true,
                title: '<img src="styles/legend/roads_5.png" /> roads'
            });
var format_railway_line_6 = new ol.format.GeoJSON();
var features_railway_line_6 = format_railway_line_6.readFeatures(json_railway_line_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_railway_line_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_railway_line_6.addFeatures(features_railway_line_6);
var lyr_railway_line_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_railway_line_6, 
                style: style_railway_line_6,
                popuplayertitle: 'railway_line',
                interactive: true,
                title: '<img src="styles/legend/railway_line_6.png" /> railway_line'
            });
var format_Bus_stops_7 = new ol.format.GeoJSON();
var features_Bus_stops_7 = format_Bus_stops_7.readFeatures(json_Bus_stops_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bus_stops_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bus_stops_7.addFeatures(features_Bus_stops_7);
cluster_Bus_stops_7 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Bus_stops_7
});
var lyr_Bus_stops_7 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Bus_stops_7, 
                style: style_Bus_stops_7,
                popuplayertitle: 'Bus_stops',
                interactive: true,
                title: '<img src="styles/legend/Bus_stops_7.png" /> Bus_stops'
            });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_streams_2.setVisible(true);lyr_waterbody_3.setVisible(true);lyr_buildings_4.setVisible(true);lyr_roads_5.setVisible(true);lyr_railway_line_6.setVisible(true);lyr_Bus_stops_7.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleHybrid_1,lyr_streams_2,lyr_waterbody_3,lyr_buildings_4,lyr_roads_5,lyr_railway_line_6,lyr_Bus_stops_7];
lyr_streams_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'waterway': 'waterway', 'salt': 'salt', 'level': 'level', 'name_en': 'name_en', 'name': 'name', 'tunnel': 'tunnel', 'layer': 'layer', });
lyr_waterbody_3.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'natural': 'natural', 'water': 'water', 'name_ml': 'name_ml', 'name': 'name', });
lyr_buildings_4.set('fieldAliases', {'osm_id': 'osm_id', 'building': 'building', });
lyr_roads_5.set('fieldAliases', {'osm_id': 'osm_id', 'highway': 'highway', 'foot': 'foot', 'bicycle': 'bicycle', 'bridge': 'bridge', 'level': 'level', 'name': 'name', 'maxspeed': 'maxspeed', 'lanes': 'lanes', 'oneway': 'oneway', });
lyr_railway_line_6.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'railway': 'railway', 'proposed': 'proposed', 'name': 'name', 'layer': 'layer', 'service': 'service', 'voltage': 'voltage', 'usage': 'usage', 'passenger_': 'passenger_', 'gauge': 'gauge', 'frequency': 'frequency', 'electrifie': 'electrifie', });
lyr_Bus_stops_7.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'operator': 'operator', 'name_ml': 'name_ml', 'bench': 'bench', 'public_tra': 'public_tra', 'bus': 'bus', 'name': 'name', });
lyr_streams_2.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'waterway': 'TextEdit', 'salt': 'TextEdit', 'level': 'TextEdit', 'name_en': 'TextEdit', 'name': 'TextEdit', 'tunnel': 'TextEdit', 'layer': 'TextEdit', });
lyr_waterbody_3.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'natural': 'TextEdit', 'water': 'TextEdit', 'name_ml': 'TextEdit', 'name': 'TextEdit', });
lyr_buildings_4.set('fieldImages', {'osm_id': 'TextEdit', 'building': 'TextEdit', });
lyr_roads_5.set('fieldImages', {'osm_id': 'TextEdit', 'highway': 'TextEdit', 'foot': 'TextEdit', 'bicycle': 'TextEdit', 'bridge': 'TextEdit', 'level': 'TextEdit', 'name': 'TextEdit', 'maxspeed': 'TextEdit', 'lanes': 'TextEdit', 'oneway': 'TextEdit', });
lyr_railway_line_6.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'railway': 'TextEdit', 'proposed': 'TextEdit', 'name': 'TextEdit', 'layer': 'TextEdit', 'service': 'TextEdit', 'voltage': 'TextEdit', 'usage': 'TextEdit', 'passenger_': '', 'gauge': 'TextEdit', 'frequency': 'TextEdit', 'electrifie': '', });
lyr_Bus_stops_7.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'operator': 'TextEdit', 'name_ml': 'TextEdit', 'bench': 'TextEdit', 'public_tra': 'TextEdit', 'bus': 'TextEdit', 'name': 'TextEdit', });
lyr_streams_2.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'waterway': 'no label', 'salt': 'no label', 'level': 'no label', 'name_en': 'no label', 'name': 'no label', 'tunnel': 'no label', 'layer': 'no label', });
lyr_waterbody_3.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'natural': 'no label', 'water': 'no label', 'name_ml': 'no label', 'name': 'no label', });
lyr_buildings_4.set('fieldLabels', {'osm_id': 'no label', 'building': 'no label', });
lyr_roads_5.set('fieldLabels', {'osm_id': 'no label', 'highway': 'no label', 'foot': 'no label', 'bicycle': 'no label', 'bridge': 'no label', 'level': 'no label', 'name': 'no label', 'maxspeed': 'no label', 'lanes': 'no label', 'oneway': 'no label', });
lyr_railway_line_6.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'railway': 'no label', 'proposed': 'no label', 'name': 'no label', 'layer': 'no label', 'service': 'no label', 'voltage': 'no label', 'usage': 'no label', 'passenger_': 'no label', 'gauge': 'no label', 'frequency': 'no label', 'electrifie': 'no label', });
lyr_Bus_stops_7.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'header label - visible with data', 'osm_type': 'no label', 'highway': 'no label', 'operator': 'no label', 'name_ml': 'no label', 'bench': 'no label', 'public_tra': 'no label', 'bus': 'no label', 'name': 'no label', });
lyr_Bus_stops_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
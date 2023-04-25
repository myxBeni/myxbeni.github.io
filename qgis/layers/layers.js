var wms_layers = [];

var lyr_swissALTI3DmultidirektionalesRelief_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.geo.admin.ch/?VERSION%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "ch.swisstopo.swissalti3d-reliefschattierung",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "swissALTI3D multidirektionales Relief",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_swissALTI3DmultidirektionalesRelief_0, 0]);
var lyr_SWISSIMAGEHintergrund_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.geo.admin.ch/?VERSION%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "ch.swisstopo.swissimage",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "SWISSIMAGE Hintergrund",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_SWISSIMAGEHintergrund_1, 0]);
var lyr_Landeskartenfarbig_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.geo.admin.ch/?VERSION%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "ch.swisstopo.pixelkarte-farbe",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Landeskarten (farbig)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Landeskartenfarbig_2, 0]);
var lyr_TPI_Terrain_Shading_20m_Recalc_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "TPI_Terrain_Shading_20m_Recalc",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/TPI_Terrain_Shading_20m_Recalc_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [891281.213552, 5980874.125600, 898703.009197, 5989783.068512]
                            })
                        });
var lyr_Topographic_Convergence_Index_5m_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "Topographic_Convergence_Index_5m",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Topographic_Convergence_Index_5m_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [891281.213552, 5980874.125600, 898703.009197, 5989783.068512]
                            })
                        });
var lyr_Hangneigung_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "Hangneigung",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Hangneigung_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [891281.213552, 5980874.125600, 898679.231948, 5986831.239964]
                            })
                        });
var format_Perimeter_6 = new ol.format.GeoJSON();
var features_Perimeter_6 = format_Perimeter_6.readFeatures(json_Perimeter_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Perimeter_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Perimeter_6.addFeatures(features_Perimeter_6);
var lyr_Perimeter_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Perimeter_6, 
                style: style_Perimeter_6,
                interactive: true,
                title: '<img src="styles/legend/Perimeter_6.png" /> Perimeter'
            });
var lyr_Feldplaene_ohne_Luftbild_7 = new ol.layer.Image({
                            opacity: 1,
                            title: "Feldplaene_ohne_Luftbild",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Feldplaene_ohne_Luftbild_7.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [893218.785670, 5981591.053092, 897597.866741, 5986188.554478]
                            })
                        });
var group_Gelndeanalyse = new ol.layer.Group({
                                layers: [lyr_TPI_Terrain_Shading_20m_Recalc_3,lyr_Topographic_Convergence_Index_5m_4,lyr_Hangneigung_5,],
                                title: "Geländeanalyse"});
var group_WMSDienste = new ol.layer.Group({
                                layers: [lyr_swissALTI3DmultidirektionalesRelief_0,lyr_SWISSIMAGEHintergrund_1,lyr_Landeskartenfarbig_2,],
                                title: "WMS-Dienste"});

lyr_swissALTI3DmultidirektionalesRelief_0.setVisible(true);lyr_SWISSIMAGEHintergrund_1.setVisible(true);lyr_Landeskartenfarbig_2.setVisible(true);lyr_TPI_Terrain_Shading_20m_Recalc_3.setVisible(true);lyr_Topographic_Convergence_Index_5m_4.setVisible(true);lyr_Hangneigung_5.setVisible(true);lyr_Perimeter_6.setVisible(true);lyr_Feldplaene_ohne_Luftbild_7.setVisible(true);
var layersList = [group_WMSDienste,group_Gelndeanalyse,lyr_Perimeter_6,lyr_Feldplaene_ohne_Luftbild_7];
lyr_Perimeter_6.set('fieldAliases', {'Layer': 'Layer', });
lyr_Perimeter_6.set('fieldImages', {'Layer': 'TextEdit', });
lyr_Perimeter_6.set('fieldLabels', {'Layer': 'no label', });
lyr_Perimeter_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
export function getDistance(latlng1, latlng2) {
    // Uses spherical law of cosines approximation.
    const R = 6371000;

    const rad = Math.PI / 180,
        lat1 = latlng1.lat * rad,
        lat2 = latlng2.lat * rad,
        a = Math.sin(lat1) * Math.sin(lat2) +
          Math.cos(lat1) * Math.cos(lat2) * Math.cos((latlng2.lng - latlng1.lng) * rad);

    const maxMeters = R * Math.acos(Math.min(a, 1));
    return maxMeters;
}

export function download_object(filename, data){
  let json = JSON.stringify(data)
  let blob = new Blob([json], {type: "application/json"})
  let download_link = document.createElement('a')
  download_link.download    = `${filename}.json`
  download_link.href        = URL.createObjectURL(blob)
  download_link.click()  
}

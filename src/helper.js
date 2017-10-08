export default class DistrictRepository {
  constructor(dataPassedIn){
    this.data = this.cleanUpData(dataPassedIn);
  }

  cleanUpData(data){
    return data.reduce( (accu, dataPiece) => {
      if (!accu[dataPiece.Location]){
        accu[dataPiece.Location] = {location: dataPiece.Location.toUpperCase(), data:{} };
      }
      accu[dataPiece.Location].data[dataPiece.TimeFrame] = Math.round(1000 * dataPiece.Data) / 1000 || 0;
      return accu;
    }, {});
  }

  findByName(location = undefined) {
    if (location){
      const dataKeys = Object.keys(this.data);
      let found = dataKeys.find( key => {
        return key.toUpperCase() === location.toUpperCase();
      });
      return this.data[found];
    }
  }

  findAllMatches(locationString) {
    const keys = Object.keys(this.data);
    let fullData = keys.map( key => this.data[key]);


    if (locationString){
      return fullData.filter(dataPiece => {
        return dataPiece.location.includes(locationString.toUpperCase());
      });
    }
    return fullData;
  }

  compareDistrictAverages(location1, location2) {
    const upperLocation1 = location1.toUpperCase();
    const upperLocation2 = location2.toUpperCase();

    const average1 = this.findAverage(upperLocation1);
    const average2 = this.findAverage(upperLocation2);
    const comparedAverage = Math.round((average1 / average2) * 1000) /1000;

    const result = {
      [upperLocation1]: average1,
      [upperLocation2]: average2,
      compared: comparedAverage
    };
    return result;
  }

  findAverage(district) {
    const districtData = this.findByName(district);
    const districtDataKeys = Object.keys(districtData.data);
    const districtAverage = districtDataKeys.reduce((acc, year) => {
      acc += districtData.data[year];
      return acc;
    }, 0);
    const totalAverage = Math.round((districtAverage / districtDataKeys.length) * 1000) /1000;

    return totalAverage;
  }
}

export default class DistrictRepository {
  constructor(dataPassedIn){
    this.data = this.cleanUpData(dataPassedIn);
  }

  cleanUpData(data){
    return data.reduce( (accu, dataPiece) => {
      if(!accu[dataPiece.Location]){
        accu[dataPiece.Location] = {location: dataPiece.Location.toUpperCase(), data:{} }
      }
      accu[dataPiece.Location].data[dataPiece.TimeFrame] = Math.round(1000 * dataPiece.Data) / 1000 || 0;
      return accu;
    }, {})
  }

  findByName(location = undefined) {
    if(location){
      const dataKeys = Object.keys(this.data);
      let found = dataKeys.find( item => {
        return item.toUpperCase() === location.toUpperCase();
      })
      return this.data[found];
    }
  }
}

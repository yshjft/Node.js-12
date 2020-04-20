module.exports=(sequelize, DataTypes)=>{
  sequelize.define('auction', {
    bid:{
      type: DataTypes.INTEGER,
      allowNull : false,
      defaultValue: 0,  
    }, //입찰가
    msg:{
      type:DataTypes.STRING(100),
      allowNull: true,
    }, //입찰 시 메시지
  },{
    timestamps:true,
    paranoid:true,
  })
};
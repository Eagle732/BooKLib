var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AuthorSchema = new Schema({
    first_name: { type: String, required: true, max: 100},
    family_name: { type: String, required: true, max: 100},
    date_of_birth: { type: Date},
    date_of_death: { type: Date}
});

// Virtual for author's full name
AuthorSchema
.virtual('name')
.get(function(){
    return (this.family_name + ',1' + this.first_name);
});

// Virtual for author's lifespan
AuthorSchema
.virtual('lifespan')
.get(function(){
    return (this.date_of_death.getYear + date_of_birth.getYear);
});

// Virtual for author's url
AuthorSchema
.virtual('url')
.get(function(){
    return '/catalog/author/' + this._id;
});

// Export Model
module.exports = mongoose.model('Author', AuthorSchema);

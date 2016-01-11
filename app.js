var app = angular.module('app', []);

app.controller('MainCtrl', [function() {
  var self = this;
  
  self.slides = [
    {title: "Slide 1", content: "This is awesome"},
    {title: "Slide 2", content: "This is okay"},
    {title: "Slide 3", content: "This is fine"}
  ];
  
  self.slide = this.slides[0];
  
  self.index = 0;
  
  self.changeSlide = function() {
    self.index++;
    if (self.index == self.slides.length) {
      self.index = 0;
    }
    self.slide = self.slides[self.index];
  };
  
  self.title = '';
  self.content = '';
  
  self.addSlide = function() {
    self.slides.push({title: self.title, content: self.content});
    self.index = self.slides.length - 1;
    self.slide = self.slides[self.index];
  };
}]);
export default class Slider {
  constructor({ SLIDER_DATA, SLIDE_ANIMATION_DURATION }) {
    this._sliderContainer = document.querySelector('#background');
    this._slideTemplate = document.querySelector('#backgroundImageTemplate');
    this._sliderData = SLIDER_DATA;
    this._slideAnimationDuretion = SLIDE_ANIMATION_DURATION;
  }

  enableSlider(hour) {
    this._setSlideStep(hour);
    this._renderSlide(this._slideStep);
  }

  changeSlide(hour) {
    if (this._checkCurrentStep(hour)) {
      this._setSlideStep(hour);
      this._renderSlide(this._slideStep);
      this._sliderContainer.firstElementChild.remove();
    }
  }

  _getSlideElement() {
    return this._slideTemplate.content.querySelector('.background__image-wrap').cloneNode(true);
  }

  _setSlideData(item, index) {
    item.firstElementChild.type = this._sliderData[index].type;
    item.firstElementChild.srcset = this._sliderData[index].srcsetWebp;
    item.lastElementChild.classList.add('background__image');
    item.lastElementChild.src = this._sliderData[index].src;
    item.lastElementChild.srcset = this._sliderData[index].srcset;
    item.lastElementChild.alt = this._sliderData[index].alt;
    return item;
  }

  _setSlideStep(hour) {
    if (hour >= 0 && hour < 6) {
      this._slideStep = 0;
    } else if (hour >= 6 && hour < 12) {
      this._slideStep = 1;
    } else if (hour >= 12 && hour < 18) {
      this._slideStep = 2;
    } else if (hour >= 18) {
      this._slideStep = 3;
    }
  }

  _checkCurrentStep(hour) {
    if (hour >= 0 && hour < 6 && this._slideStep === 0) {
      return false;
    } else if (hour >= 6 && hour < 12 && this._slideStep === 1) {
      return false;
    } else if (hour >= 12 && hour < 18 && this._slideStep === 2) {
      return false;
    } else if (hour >= 18 && this._slideStep === 3) {
      return false;
    }

    return true;
  }

  _renderSlide(index) {
    this._currentSlide = this._getSlideElement();
    this._sliderContainer.append(this._setSlideData(this._currentSlide, index));
    this._sliderContainer.lastElementChild.animate({ opacity: ['0', '1'] }, this._slideAnimationDuretion);
  }
}

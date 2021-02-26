describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/');
  });

  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75');
    
    cy.get('#volume-slider').then(($el) => {
      expect($el).to.have.value(75);
    });
  });

  it('Volume changes when slider input changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    
    cy.get('#volume-number').then(($el) => {
      expect($el).to.have.value(33);
    });
  });

  it('Audio changes when slider input changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    
    cy.get('#horn-sound').then(($el) => {
      expect($el).to.have.prop('volume', 0.33);
    });
  });

  it('Image and sound sources change when party horn is selected', () => {
    cy.get('#radio-party-horn').check();

    cy.get('#sound-image').then(($el) => {
      expect($el).prop('src').contains('/assets/media/images/party-horn.svg');
    });

    cy.get('#horn-sound').then(($el) => {
      expect($el).prop('src').contains('/assets/media/audio/party-horn.mp3');
    });
  });

  it('Sound image for level 3', () => {
    cy.get('#volume-number').clear().type('100');

    cy.get('#volume-image').then(($el) => {
      expect($el).prop('src').contains('/assets/media/icons/volume-level-3.svg');
    });

    cy.get('#volume-number').clear().type('67');

    cy.get('#volume-image').then(($el) => {
      expect($el).prop('src').contains('/assets/media/icons/volume-level-3.svg');
    });
  });

  it('Sound image for level 2', () => {
    cy.get('#volume-number').clear().type('66');

    cy.get('#volume-image').then(($el) => {
      expect($el).prop('src').contains('/assets/media/icons/volume-level-2.svg');
    });

    cy.get('#volume-number').clear().type('34');

    cy.get('#volume-image').then(($el) => {
      expect($el).prop('src').contains('/assets/media/icons/volume-level-2.svg');
    });
  });

  it('Sound image for level 1', () => {
    cy.get('#volume-number').clear().type('33');

    cy.get('#volume-image').then(($el) => {
      expect($el).prop('src').contains('/assets/media/icons/volume-level-1.svg');
    });

    cy.get('#volume-number').clear().type('1');

    cy.get('#volume-image').then(($el) => {
      expect($el).prop('src').contains('/assets/media/icons/volume-level-1.svg');
    });
  });

  it('Sound image for level 0', () => {
    cy.get('#volume-number').clear().type('0');

    cy.get('#volume-image').then(($el) => {
      expect($el).prop('src').contains('/assets/media/icons/volume-level-0.svg');
    });
  });

  it('Button disabled on invalid input', () => {
    cy.get('#volume-number').clear().type('ABC');

    cy.get('#honk-btn').then(($el) => {
      expect($el).to.have.prop('disabled', true);
    });

    cy.get('#volume-number').clear();

    cy.get('#honk-btn').then(($el) => {
      expect($el).to.have.prop('disabled', true);
    });
  });

  it('Error on invalid input', () => {
    cy.get('#volume-number').clear().type('101');

    cy.get('input:invalid').should('have.length', 1);
  });
});

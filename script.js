function loadGame(url) {
  const frame = document.getElementById('game-frame');
  const placeholder = document.getElementById('placeholder-text');
  
  // Hide the fake 'Science' text and show the game
  placeholder.style.display = 'none'; 
  frame.style.display = 'block';      
  
  // Load the game URL into the iframe
  frame.src = url;                    
  
  // Smoothly scroll back to the top so you can see the game player
  window.scrollTo({ top: 0, behavior: 'smooth' }); 
}

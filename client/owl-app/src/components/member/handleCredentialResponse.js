function handleCredentialResponse(response) {
    fetch('/api/auth/google', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ credential: response.credential }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // 인증 성공 시
      })
      .catch((error) => {
        console.error('Google login error:', error);
        // 인증 실패 시
      });
  }
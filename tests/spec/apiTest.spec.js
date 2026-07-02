const { test, expect, request } = require('@playwright/test');

test.describe('API Test', async () => {
    
    test('POST Test', async ({}) => {
        const apiContext = await request.newContext();
        const postData = {
            userId : 101,
            title: 'Learn API Testing',
            body: 'Practicing API testing with JSONPlaceholder',
        };
        const resPost = await apiContext.post('https://jsonplaceholder.typicode.com/posts', {
            data: postData,
        });

        expect(resPost.status()).toBe(201);
        
    const respondBody = await resPost.json();
    console.log(respondBody);
    expect(respondBody.userId).toBe(101);
    expect(respondBody.title).toBe('Learn API Testing');
    expect(respondBody.body).toBe('Practicing API testing with JSONPlaceholder');
  });

    test('GET Test', async ({}) => {
        const apiContext = await request.newContext();
        const respond = await apiContext.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
      
        expect(respond.status()).toBe(200);
      
          const respondBody = await respond.json();
          console.log(respondBody);
          expect(respondBody).not.toBeNull;
        });

    test('PUT Test', async ({}) => {
        const apiContext = await request.newContext();
        const putData = {
            userId : 99,
            title: 'Updated Post Title',
            body: 'This is the updated body content.',
        };
        const resPut = await apiContext.put('https://jsonplaceholder.typicode.com/posts/1', {
        data: putData,
        });
        expect(resPut.status()).toBe(200);

        const respondBody = await resPut.json();
        console.log(respondBody);
        expect(respondBody.userId).toBe(99);
        expect(respondBody.title).toBe('Updated Post Title');
        expect(respondBody.body).toBe('This is the updated body content.');
    });

    test('DELETE Test', async ({}) => {
        const apiContext = await request.newContext();
        const resDelete = await apiContext.delete('https://jsonplaceholder.typicode.com/posts/1');

        expect(resDelete.status()).toBe(200);

        const respondBody = await resDelete.text();
        console.log(respondBody);

        await apiContext.dispose();
    });
});
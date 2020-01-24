const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');

function createFoder(structureObj){
  let folderBlock = document.createElement('div')
  let folderHover = document.createElement('p')
  let icon = document.createElement('i')
  let text = document.createElement('span')
  folderBlock.className = 'folder-block';
  folderHover.className = 'folder-hover';
  icon.className = 'material-icons icon folder';
  text.className = 'text';
  icon.innerHTML = 'folder';
  text.innerHTML = structureObj['title'];
  folderHover.appendChild(icon);
  folderHover.appendChild(text);
  folderBlock.appendChild(folderHover);

  return folderBlock;
}

function createFile(structureObj){
  let folderBlock = document.createElement('div')
  let folderHover = document.createElement('p')
  let icon = document.createElement('i')
  let text = document.createElement('span')
  folderBlock.className = 'folder-block';
  folderHover.className = 'folder-hover';
  icon.className = 'material-icons icon file';
  text.className = 'text';
  icon.innerHTML = 'insert_drive_file';
  text.innerHTML = structureObj['title'];
  folderHover.appendChild(icon);
  folderHover.appendChild(text);
  folderBlock.appendChild(folderHover);

  return folderBlock;
}
function obxodDereva(children){
  children.forEach(element => {
    if (element['folder'] === true ){
      rootNode.appendChild(createFoder(element))
      console.log('Folder '+ element['title']);
      createFoder(element);
      if (element['children'] !== null && element['children'] !== false){
        obxodDereva(element['children']);
      }
      } else {
        rootNode.appendChild(createFile(element));
        console.log('Title '+ element['title']);
      }
  });
}
obxodDereva(structure);
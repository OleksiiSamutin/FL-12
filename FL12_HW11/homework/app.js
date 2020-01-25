const structure = [
  {
    folder: true,
    title: 'Films',
    children: [
      {
        title: 'Iron Man.avi'
      },
      {
        folder: true,
        title: 'Fantasy',
        children: [
          {
            title: 'The Lord of the Rings.avi'
          },
          {
            folder: true,
            title: 'New folder 1',
            children: false
          }
        ]
      }
    ]
  },
  {
    folder: true,
    title: 'Documents',
    children: [
      {
        folder: true,
        title: 'EPAM Homework answers',
        children: null
      }
    ]
  }
];

const rootNode = document.getElementById('root');

function createFoder(structureObj, parentFolder, empty = false) {
  let folderBlock = document.createElement('div');
  let folderHover = document.createElement('p');
  if (empty) {
    folderHover.className = 'empty folder-hover';
    folderHover.style = parentFolder === rootNode ? 'display: block' : 'display: none';
    folderHover.innerHTML = 'Folder is empty';
    folderBlock.appendChild(folderHover);
    parentFolder.appendChild(folderBlock);
    return folderBlock;
  } else {

    folderHover.style = parentFolder === rootNode ? 'display: block' : 'display: none';
    let icon = document.createElement('i');
    let text = document.createElement('span');
    folderBlock.className = 'folder-block';
    folderHover.className = 'folder-hover';
    icon.className = 'material-icons icon folder';
    text.className = 'text';
    icon.innerHTML = 'folder';
    text.innerHTML = structureObj['title'];
    folderHover.appendChild(icon);
    folderHover.appendChild(text);
    folderBlock.appendChild(folderHover);
    parentFolder.appendChild(folderBlock);

    return folderBlock;
  }
}

function createFile(structureObj, parentFolder) {
  let folderBlock = document.createElement('div');
  let folderHover = document.createElement('p');
  folderHover.style = parentFolder === rootNode ? 'display: block' : 'display: none';
  let icon = document.createElement('i');
  let text = document.createElement('span');
  folderBlock.className = 'folder-block';
  folderHover.className = 'folder-hover';
  icon.className = 'material-icons icon file';
  text.className = 'text';
  icon.innerHTML = 'insert_drive_file';
  text.innerHTML = structureObj['title'];
  folderHover.appendChild(icon);
  folderHover.appendChild(text);
  folderBlock.appendChild(folderHover);
  parentFolder.appendChild(folderBlock);
  return folderBlock;
}

function obxodDereva(children, currentFolder) {
  if (children === null || children === false) {
    createFoder(children, currentFolder, true);
    return;
  }
  children.forEach((element) => {
    if (element['folder'] === true) {
      obxodDereva(
        element['children'],
        createFoder(element, currentFolder)
      );
    } else {
      createFile(element, currentFolder);
    }
  });
}
obxodDereva(structure, rootNode);

let folderHover = document.querySelectorAll('.folder-hover');
folderHover.forEach(folder => {
  folder.onclick = function (event) {
    if (!event.target.parentElement.classList.contains('open')) {
      for (let i = 1; i < event.target.parentElement.children.length; i++) {
        console.log(event.target.parentElement.children[i].children[0]);
        event.target.parentElement.children[i].children[0].style = 'display: block';
        event.target.children[0].innerHTML = 'folder_open';
        event.target.parentElement.classList.add('open');
      }
    } else {
      for (let i = 1; i < event.target.parentElement.children.length; i++) {
        console.log(event.target.parentElement.children[i].children[0]);
        event.target.parentElement.children[i].children[0].style = 'display: none';
        event.target.children[0].innerHTML = 'folder';
        event.target.parentElement.classList.remove('open');
      }

    }
  }
})

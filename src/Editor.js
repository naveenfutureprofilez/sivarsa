import React, { useState } from 'react';
import FilerobotImageEditor, {TABS,TOOLS} from 'react-filerobot-image-editor';

export default function Editor() {
  const [isImgEditorShown, setIsImgEditorShown] = useState(false);

  const closeImgEditor = () => {
    setIsImgEditorShown(false);
  };

  const [Editied, setEditied] = useState(null);

  const saveImage = (editedImageObject, designState) => { 
    setEditied(Editied);
    console.log('saved', editedImageObject, designState)
  }

  return (
    <div className='h-screen bg-white'>
        <button onClick={() => setIsImgEditorShown(true)} >OPEN</button>
        {isImgEditorShown ? 
          <FilerobotImageEditor
            source="https://scaleflex.airstore.io/demo/stephen-walker-unsplash.jpg"
            onSave={saveImage}
            onClose={closeImgEditor}
            annotationsCommon={{
              fill: '#ff0000',
            }}
            Text={{ text: 'TEXT' }}
            Rotate={{ angle: 90, componentType: 'slider' }}
            Crop={{
              presetsItems: [
                {
                  titleKey: 'classicTv',
                  descriptionKey: '4:3',
                  ratio: 4 / 3,
                },
                {
                  titleKey: 'cinemascope',
                  descriptionKey: '21:9',
                  ratio: 21 / 9,
                },
              ],
              presetsFolders: [
                {
                  titleKey: 'socialMedia', // will be translated into Social Media as backend contains this translation key
                  // icon: Social, // optional, Social is a React Function component. Possible (React Function component, string or HTML Element)
                  groups: [
                    {
                      titleKey: 'facebook',
                      items: [
                        {
                          titleKey: 'profile',
                          width: 180,
                          height: 180,
                          descriptionKey: 'fbProfileSize',
                        },
                        {
                          titleKey: 'coverPhoto',
                          width: 1200,
                          height: 768,
                          descriptionKey: 'fbCoverPhotoSize',
                        },
                      ],
                    },
                  ],
                },
              ], 
            }}
            tabsIds={[TABS.ADJUST, TABS.FINETUNE, TABS.FILTERS, TABS.ANNOTATE, TABS.WATERMARK, TABS.RESIZE, TOOLS.TEXT]}
            defaultTabId={TABS.ANNOTATE}
            defaultToolId={TOOLS.TEXT} 
          /> 
        : ''}
    </div>
  );
}
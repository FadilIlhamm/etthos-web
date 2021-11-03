const customStyles = {
    rows: {
        style: {
          border: 'none', // override the row height
          borderRadius:5,
          backgroundColor:"#CCF4FF",
          '&:nth-of-type(odd)': {
              backgroundColor: '#FFFFFF',
          }
        },   
    },
    headCells: {
      style: {
        border: 'none',
        
      },
    },
};

export default customStyles;
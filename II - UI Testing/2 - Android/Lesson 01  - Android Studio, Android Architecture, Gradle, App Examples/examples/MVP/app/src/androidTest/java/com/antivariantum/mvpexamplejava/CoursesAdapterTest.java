package com.antivariantum.mvpexamplejava;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import androidx.recyclerview.widget.RecyclerView;
import androidx.test.ext.junit.runners.AndroidJUnit4;
import androidx.test.platform.app.InstrumentationRegistry;

import com.antivariantum.mvpexamplejava.model.models.Author;
import com.antivariantum.mvpexamplejava.model.models.Course;
import com.antivariantum.mvpexamplejava.model.models.Trainer;
import com.antivariantum.mvpexamplejava.model.models.User;
import com.antivariantum.mvpexamplejava.view.adapters.CoursesAdapter;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.List;

@RunWith(AndroidJUnit4.class)
public class CoursesAdapterTest {

    @Mock
    private RecyclerView.ViewHolder viewHolderMock;

    @Mock
    private LayoutInflater inflaterMock;

    @Mock
    private ViewGroup parentMock;

    @Mock
    private Context contextMock;

    @Mock
    private View viewMock;

    private CoursesAdapter adapter;
    private List<Course> data;
    static Context context;

    @Before
    public void setup() {

        MockitoAnnotations.openMocks(this);

        data = new ArrayList<>();
        User user = new User("TestUser");
        user.setName("Игорь");
        user.setDescription("Очень крутой SDET");
        user.setImage(new byte[]{1, 2, 3, 4, 5});
        Author author = new Author(user);
        Trainer trainer = new Trainer(user);
        Course course1 = new Course("Курс 1", "Тестирование UI", author, trainer);
        data.add(course1);
        Course course2 = new Course("Курс 2", "Тестирование API", author, trainer);
        data.add(course2);

        context = InstrumentationRegistry.getInstrumentation().getTargetContext();
        adapter = new CoursesAdapter(context);
        adapter.setCourseList(data);

        parentMock = mock(ViewGroup.class);
        inflaterMock = mock(LayoutInflater.class);

    }


    @Test
    public void testAdapterCourseItemsCount() {
        Assert.assertEquals(2, adapter.getItemCount());
    }

    @Test
    public void TestAdapterViewHolder() {

        Mockito.when(inflaterMock.inflate(Mockito.anyInt(), Mockito.eq(parentMock), Mockito.anyBoolean())).thenReturn(viewMock);
        Mockito.when(inflaterMock.getContext()).thenReturn(contextMock);

        viewHolderMock = adapter.onCreateViewHolder(parentMock, 0);

        verify(parentMock).getContext();
        verify(inflaterMock).inflate(R.layout.courses_list, parentMock, false);

    }


}
